package com.PAF.paf.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PAF.paf.model.LearningProgress;
import com.PAF.paf.service.LearningProgressService;

@RestController
@RequestMapping("/learningProgress")
public class LearningProgressController {

    @Autowired
    private LearningProgressService learningProgressService;

    @GetMapping
    public List<LearningProgress> getAllLearningProgresses() {
        return learningProgressService.getAllLearningProgresses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LearningProgress> getLearningProgressById(@PathVariable String id) {
        Optional<LearningProgress> progress = learningProgressService.getLearningProgressById(id);
        return progress.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<LearningProgress> createLearningProgress(@RequestBody LearningProgress learningProgress) {
        LearningProgress savedProgress = learningProgressService.createLearningProgress(learningProgress);
        return new ResponseEntity<>(savedProgress, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LearningProgress> updateLearningProgress(@PathVariable String id,
                                                                    @RequestBody LearningProgress learningProgress) {
        LearningProgress updatedProgress = learningProgressService.updateLearningProgress(id, learningProgress);
        if (updatedProgress != null) {
            return new ResponseEntity<>(updatedProgress, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLearningProgress(@PathVariable String id) {
        learningProgressService.deleteLearningProgress(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
