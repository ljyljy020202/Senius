package xyz.senius99.senius.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CommonResponse {   //쇼핑몰 조회와 포인트 내역 조회 시 응답 형식때문에 만듦
    private int userpoint;
    private Object object;  //리스트나 배열이어도 되는지? - gpt가 된다함
}
