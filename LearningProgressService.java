package com.PAF.paf.service;

import java.util.List;
import java.util.Optional;

import com.PAF.paf.model.LearningProgress;

public interface LearningProgressService {

    List<LearningProgress> getAllLearningProgresses();

    Optional<LearningProgress> getLearningProgressById(String id);

    LearningProgress createLearningProgress(LearningProgress learningProgress);

    LearningProgress updateLearningProgress(String progressId, LearningProgress learningProgress);

    void deleteLearningProgress(String progressId);
}
