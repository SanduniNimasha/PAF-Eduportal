package com.PAF.paf.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.PAF.paf.model.LearningProgress;

@Repository
public interface LearningProgressRepository extends MongoRepository<LearningProgress, String> {

}