package xyz.senius99.senius.dto;

import lombok.Data;

@Data
public class PurchaseDTO {
    private String id;  //멤버아이디
    private String item;    //아이템 이름
    private int point;
}
