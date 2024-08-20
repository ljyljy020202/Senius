package xyz.senius99.senius.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.senius99.senius.common.CommonResponse;
import xyz.senius99.senius.dto.PointHistoryDTO;
import xyz.senius99.senius.dto.PointSaveDTO;
import xyz.senius99.senius.dto.PurchaseDTO;
import xyz.senius99.senius.entity.Member;
import xyz.senius99.senius.entity.PointHistory;
import xyz.senius99.senius.service.MemberService;
import xyz.senius99.senius.service.PointService;
import xyz.senius99.senius.service.StockService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/memberpoint")
@RequiredArgsConstructor
public class PointController {
    private final MemberService memberService;
    private final PointService pointService;
    private final StockService stockService;

    //데이터베이스자리
    @PostMapping("/addpoint")
    public void addPoint(@RequestBody PointSaveDTO pointSaveDTO) {    //id를 멤버 객체로 저장하는지 확인 필요 - id String으로 일단 수정함
        //멤버의 포인트 값 업데이트
        memberService.updatePoint(pointSaveDTO.getId(), pointSaveDTO.getPoint());
        //pointHistory 저장
        Member member = memberService.getProfile(pointSaveDTO.getId());
        PointHistory pointHistory = new PointHistory(
                member, "게임 클리어", pointSaveDTO.getPoint(), LocalDateTime.now()
        );
        pointService.saveHistory(pointHistory);
    }

    @PostMapping("/payment")
    public void payment(@RequestBody PurchaseDTO purchaseDTO) {
        //구매내역 저장
        memberService.savePurchase(purchaseDTO);
        //포인트 차감
        memberService.updatePoint(purchaseDTO.getId(), -purchaseDTO.getPoint()); //포인트 음수값으로 넘김
        //포인트 내역 추가
        Member member = memberService.getProfile(purchaseDTO.getId());
        PointHistory pointHistory = new PointHistory(
                member, "포인트 결제", purchaseDTO.getPoint(), LocalDateTime.now()
        );
        pointService.saveHistory(pointHistory);
        //재고 줄이기
        stockService.decreaseStock(purchaseDTO);
    }

    @GetMapping("/history")
    public ResponseEntity<CommonResponse> getPointHistory(@RequestParam String id) {
        //userpoint를 함께 반환하기 위해 CommonResponse 이용

        int userpoint = memberService.getProfile(id).getPoint();
        List<PointHistoryDTO> dtoList = pointService.getPointList(id);
        CommonResponse commonResponse = new CommonResponse(userpoint, dtoList);

        return ResponseEntity.ok(commonResponse);
    }

}
