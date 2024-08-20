package xyz.senius99.senius.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xyz.senius99.senius.common.CommonResponse;
import xyz.senius99.senius.dto.ItemDTO;
import xyz.senius99.senius.service.MemberService;
import xyz.senius99.senius.service.StockService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/stock")
@RequiredArgsConstructor
public class StockController {
    private final MemberService memberService;
    private final StockService stockService;

    @GetMapping("/shoplist")
    public ResponseEntity<CommonResponse> shoplist(@RequestParam String id) {
        int userpoint = memberService.getProfile(id).getPoint();
        List<ItemDTO> list = stockService.getStockList();
        CommonResponse commonResponse = new CommonResponse(userpoint, list);

        return ResponseEntity.ok(commonResponse);
    }
}
