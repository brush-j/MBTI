package com.example.mbti.controller;

import com.example.mbti.dto.MbtiDto;
import com.example.mbti.entity.MbtiResult;
import com.example.mbti.repository.MbtiRepository;
import com.example.mbti.service.MbtiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mbti")
public class MbtiController {

    @Autowired
    MbtiService mbtiService;
    @Autowired
    MbtiRepository mbtiRepository;

    @PostMapping(value = "/result")
    public String calmbti(@RequestBody MbtiDto mbtiDto){

        String result = mbtiService.calResult(mbtiDto);

        MbtiResult mbtiResult = mbtiDto.toEntity();

        mbtiService.save(mbtiResult);

        return result;
    }
}
