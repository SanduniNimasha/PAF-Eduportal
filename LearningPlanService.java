package com.PAF.paf.service;

import java.util.List;
import java.util.Optional;

import com.PAF.paf.model.LearningPlan; //inport

public interface LearningPlanService {

    List<LearningPlan> getAllLearningPlans();

    Optional<LearningPlan> getLearningPlanById(String statusId);

    LearningPlan createLearningPlan(LearningPlan learningPlan);

    LearningPlan updateLearningPlan(String statusId, LearningPlan learningPlan);

    void deleteLearningPlan(String statusId);

}
