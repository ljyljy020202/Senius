package xyz.senius99.senius.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.senius99.senius.dto.PurchaseDTO;
import xyz.senius99.senius.dto.PurchaseHistoryDTO;
import xyz.senius99.senius.entity.Item;
import xyz.senius99.senius.entity.Member;
import xyz.senius99.senius.entity.PurchaseHistory;
import xyz.senius99.senius.repository.ItemRepository;
import xyz.senius99.senius.repository.MemberRepository;
import xyz.senius99.senius.repository.PurchaseHistoryRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public Member getProfile(String id) {
        return memberRepository.findById(id);
    }

    @Transactional
    public List<PurchaseHistoryDTO> getPurchaseList(String id) {
        List<PurchaseHistory> list = purchaseHistoryRepository.findById_Id(id);
        List<PurchaseHistoryDTO> dtoList = new ArrayList<>();

        for (PurchaseHistory purchaseHistory : list) {
            PurchaseHistoryDTO dto = new PurchaseHistoryDTO(
                    purchaseHistory.getId().getId(),
                    purchaseHistory.getImgPath()
            );
            dtoList.add(dto);
        }
        return dtoList;
    }

    @Transactional
    public void deleteMember(String id) {
        Member member = memberRepository.findById(id);
        memberRepository.delete(member);
    }

    @Transactional
    public void updatePoint(String id, int point) {
        Member member = memberRepository.findById(id);
        int curPoint = member.getPoint();
        curPoint += point;
        member.setPoint(curPoint);

        //DB에 수정사항이 언제 반영되는지 확인 필요
    }

    @Transactional
    public void savePurchase(PurchaseDTO purchaseDTO) {
        Member member = memberRepository.findById(purchaseDTO.getId());
        Item item = itemRepository.findByName(purchaseDTO.getItem());
        PurchaseHistory purchase = new PurchaseHistory(member, item);
        purchase.setImgPath("src/main/resources/static/purchase_data/vita500/1.jpg");   //임의로 쓴 이미지 경로

        purchaseHistoryRepository.save(purchase);
    }
}
