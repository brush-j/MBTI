package com.example.mbti.dto;

import com.example.mbti.entity.MbtiResult;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MbtiDto {

    private int E, I, N, S, T, F, P, J;
    private String mbti1, mbti2, mbti3, mbti4;
    private String result;

    public MbtiResult toEntity() {
        return new MbtiResult(null, result, null);
    }
}
