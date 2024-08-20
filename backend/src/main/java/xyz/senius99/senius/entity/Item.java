package xyz.senius99.senius.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import xyz.senius99.senius.dto.ItemDTO;

@Entity
@Getter
@Setter
public class Item {
    @Id
    private String name;
    private String imgpath;
    private int price;
    private String description;
    private int stockQuantity;

    public ItemDTO toDTO() {
        return new ItemDTO(this.name, this.imgpath, this.price, this.description);
    }
}
