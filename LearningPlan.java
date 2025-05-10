package com.PAF.paf.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "learningPlans") // <-- Updated this one
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LearningPlan {

    @Id
    private String statusId;
    private String userId;
    private String title;
    private String topic;
    private String resources;
    private String description;
    private String startDate;
    private String endDate;
    private String username;
    private String userProfile;
}
