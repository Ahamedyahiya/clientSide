package com.example.demo.repository;

import com.example.demo.model.SmoothieDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SmoothieDetailsRepository extends JpaRepository<SmoothieDetails, Long>{

}
