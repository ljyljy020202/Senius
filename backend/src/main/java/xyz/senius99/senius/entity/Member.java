package xyz.senius99.senius.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    private String name;
    private int age;
    private String phone;
    @Id
    private String id;  //id는 이메일 형식 ex)ljy02@naver.com
    private String profile;

    private int point;
}
