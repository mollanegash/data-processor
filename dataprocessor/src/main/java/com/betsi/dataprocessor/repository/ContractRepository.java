package com.betsi.dataprocessor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.betsi.dataprocessor.model.Contract;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {

    @Query("SELECT c FROM Contract c WHERE c.title LIKE %:keyword%")
    List<Contract> searchByTitle(@Param("keyword") String keyword);

    @Query("SELECT c FROM Contract c WHERE c.primaryNaics LIKE %:naics%")
    List<Contract> filterByNaics(@Param("naics") String naics);

    List<Contract> findAllByOrderByTitleAsc();  // Sorting by title in ascending order

    List<Contract> findAllByOrderByTitleDesc();  // Sorting by title in descending order
    
}
