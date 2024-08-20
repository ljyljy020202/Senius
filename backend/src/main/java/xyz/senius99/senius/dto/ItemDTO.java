package xyz.senius99.senius.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ItemDTO {
    private String name;
    private String imgpath;
    private int price;
    private String description;
}
