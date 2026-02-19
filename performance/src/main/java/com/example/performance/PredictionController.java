package com.example.performance;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PredictionController {

    @PostMapping("/predict")
    public ResponseEntity<?> predict(@RequestBody PredictionRequest request) {

        RestTemplate restTemplate = new RestTemplate();
        String pythonUrl = "http://localhost:5001/predict";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<PredictionRequest> entity =
                new HttpEntity<>(request, headers);

        ResponseEntity<PredictionResponse> response =
                restTemplate.postForEntity(
                        pythonUrl,
                        entity,
                        PredictionResponse.class
                );

        return ResponseEntity.ok(response.getBody());
    }
}
