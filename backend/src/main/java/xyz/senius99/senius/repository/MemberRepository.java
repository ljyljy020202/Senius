package xyz.senius99.senius.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.senius99.senius.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findById(String id);

    boolean existsById(String id);

    void delete(Member entity);
}
