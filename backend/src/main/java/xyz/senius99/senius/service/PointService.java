package xyz.senius99.senius.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.senius99.senius.dto.PointHistoryDTO;
import xyz.senius99.senius.entity.PointHistory;
import xyz.senius99.senius.repository.PointHistoryRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PointService {
    private final PointHistoryRepository pointHistoryRepository;

    @Transactional
    public void saveHistory(PointHistory pointHistory) {
        pointHistoryRepository.save(pointHistory);
    }

    @Transactional
    public List<PointHistoryDTO> getPointList(String id) {
        List<PointHistory> list = pointHistoryRepository.findById_Id(id);
        List<PointHistoryDTO> dtoList = new ArrayList<>();

        for (PointHistory pointHistory : list) {
            PointHistoryDTO dto = new PointHistoryDTO(
                    id, pointHistory.getContent(), pointHistory.getPoint(), pointHistory.getTime()
            );
            dtoList.add(dto);
        }
        return dtoList;
    }
}
