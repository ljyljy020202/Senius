package xyz.senius99.senius.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PointHistoryDTO {      //포인트 내역을 반환하기 위한 dto

    private String id;
    private String content;
    private int point;
    private LocalDateTime time;
}
