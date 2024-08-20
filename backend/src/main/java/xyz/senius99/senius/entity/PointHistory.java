package xyz.senius99.senius.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class PointHistory {
    public PointHistory(Member id, String content, int point, LocalDateTime time) {
        this.id = id;
        this.content = content;
        this.point = point;
        this.time = time;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PK;//의미없는필드

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member id;

    private String content; //'게임 클리어', '포인트 결제', '회원 가입' 중 하나
    private int point;
    private LocalDateTime time;
}
