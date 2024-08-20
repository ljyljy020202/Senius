package xyz.senius99.senius.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class PurchaseHistory {
    public PurchaseHistory(Member id, Item name) {
        this.id = id;
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PK;//의미없는필드

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member id;

    @ManyToOne
    @JoinColumn(name = "item_name")
    private Item name;

    private String imgPath;
}
