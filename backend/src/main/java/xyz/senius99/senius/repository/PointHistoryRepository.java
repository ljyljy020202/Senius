package xyz.senius99.senius.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.senius99.senius.entity.PointHistory;

import java.util.List;

@Repository
public interface PointHistoryRepository extends JpaRepository<PointHistory, Long> {
    //Member findByMemberId(String id);//PointHistory가 fk로 id를 가지므로, pk인 Member로가서Id를체크함
    List<PointHistory> findById_Id(String memberId);

    <S extends PointHistory> S save(S entity);
}
