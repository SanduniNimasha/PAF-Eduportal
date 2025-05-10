package com.PAF.paf.service;

import org.springframework.http.ResponseEntity;

import com.PAF.paf.DTO.PostDTO;
import com.PAF.paf.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> getAllPosts();

    Optional<Post> getPostById(String id);

    Post createPost(Post post);

    ResponseEntity<Post> editPost( PostDTO postDTO);

    void deletePost(String id);

    ResponseEntity<Object> likePost(String postId, String userId);

    List<Post> getPostByIdUserId(String userId);

}
