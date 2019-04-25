package com.pnc.RewardsPlayingGameUI.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/userInfo")
    public String getUserInfo() {
        return "index";
    }
}