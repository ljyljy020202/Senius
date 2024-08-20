package xyz.senius99.senius.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.senius99.senius.entity.PurchaseHistory;

import java.util.List;

@Repository
public interface PurchaseHistoryRepository extends JpaRepository<PurchaseHistory, Long> {

    List<PurchaseHistory> findById_Id(String memberId);

    @Override
    <S extends PurchaseHistory> S save(S entity);
}
