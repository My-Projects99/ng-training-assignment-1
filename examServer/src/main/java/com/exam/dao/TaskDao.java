package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.pojo.Task;

public interface TaskDao extends JpaRepository<Task, Long> {

}
