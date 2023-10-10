package com.example.mbti.repository;

import com.example.mbti.entity.MbtiResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MbtiRepository extends JpaRepository<MbtiResult, Long> {
}
