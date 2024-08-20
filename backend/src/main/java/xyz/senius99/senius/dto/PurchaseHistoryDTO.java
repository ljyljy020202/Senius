package xyz.senius99.senius.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PurchaseHistoryDTO {
    private String item;
    private String imgpath;
}
