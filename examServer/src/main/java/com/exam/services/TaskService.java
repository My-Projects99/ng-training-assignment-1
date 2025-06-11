package com.exam.services;

import java.util.List;

import com.exam.pojo.Task;


public interface TaskService {
	//Create Task
		public Task createTask(Task task) throws Exception;
	//Get All Task 
		public List<Task> getAllTask();
	//Delete User By id
		public String taskDeleted(Long taskId);
	//Update User
		public Task updateTask(Long taskId, Task taskDetails);
		
		Task getTaskById(Long id);

}
