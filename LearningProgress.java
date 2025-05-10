package com.PAF.paf.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "learningProgress") // Renamed from "workoutPlans"
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LearningProgress {

    @Id
    private String progressId; // Renamed from "workoutPlanId"
    private String userId;
    private String title;
    private String tutorials;
    private String skills;
    private String description;
    private String date;
    private String username;
    private String userProfile;
}
