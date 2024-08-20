package xyz.senius99.senius.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PointSaveDTO { //포인트 적립 요청을 처리하기 위한 dto
    private String id;
    private String content;
    private int point;
}
