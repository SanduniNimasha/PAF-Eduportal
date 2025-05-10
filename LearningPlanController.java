package com.PAF.paf.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PAF.paf.model.LearningPlan;
import com.PAF.paf.service.LearningPlanService;

@RestController
@RequestMapping("/learningPlan")
public class LearningPlanController {

    @Autowired
    private LearningPlanService learningPlanService;

    @GetMapping
    public List<LearningPlan> getAllLearningPlans() {
        return learningPlanService.getAllLearningPlans();
    }

    @GetMapping("/{statusId}")
    public ResponseEntity<LearningPlan> getLearningPlanById(@PathVariable String statusId) {
        Optional<LearningPlan> learningPlan = learningPlanService.getLearningPlanById(statusId);
        return learningPlan
                .map(plan -> new ResponseEntity<>(plan, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<LearningPlan> createLearningPlan(@RequestBody LearningPlan learningPlan) {
        LearningPlan savedPlan = learningPlanService.createLearningPlan(learningPlan);
        return new ResponseEntity<>(savedPlan, HttpStatus.CREATED);
    }

    @PutMapping("/{statusId}")
    public ResponseEntity<LearningPlan> updateLearningPlan(@PathVariable String statusId,
                                                           @RequestBody LearningPlan learningPlan) {
        LearningPlan updatedPlan = learningPlanService.updateLearningPlan(statusId, learningPlan);
        if (updatedPlan != null) {
            return new ResponseEntity<>(updatedPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{statusId}")
    public ResponseEntity<Void> deleteLearningPlan(@PathVariable String statusId) {
        learningPlanService.deleteLearningPlan(statusId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
