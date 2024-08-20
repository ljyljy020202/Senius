package xyz.senius99.senius.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import xyz.senius99.senius.dto.MemberDTO;
import xyz.senius99.senius.dto.PurchaseHistoryDTO;
import xyz.senius99.senius.entity.Member;
import xyz.senius99.senius.service.MemberService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/profile")
    public MemberDTO getMember(@RequestParam String id) {
        System.out.println("getMember");
        Member member = memberService.getProfile(id);
        if (member != null)
            return new MemberDTO(member.getName(), member.getAge(), member.getPhone(), member.getId(), member.getProfile());
        else
            return null;    //해당하는 멤버가 존재하지 않을 경우 null을 리턴하도록 함
    }

    @GetMapping("/purchase")
    public List<PurchaseHistoryDTO> getPurchaseHistory(@RequestParam String id) {
        System.out.println("getPurchaseHistory");
        List<PurchaseHistoryDTO> dtoList = memberService.getPurchaseList(id);
        return dtoList;
    }

    @DeleteMapping("/withdraw")
    public void withdraw(@RequestParam String id) {
        System.out.println("withdraw");
        memberService.deleteMember(id);
    }

}
