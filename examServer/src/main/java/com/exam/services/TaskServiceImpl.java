package com.exam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.TaskDao;
import com.exam.pojo.Task;


@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskDao taskDao;

	@Override
	public Task createTask(Task task) throws Exception {
		// TODO Auto-generated method stub
		task = taskDao.save(task);
		return task;
	}

	@Override
	public List<Task> getAllTask() {
		// TODO Auto-generated method stub
		return taskDao.findAll();
	}

	@Override
	public String taskDeleted(Long taskId) {
		// TODO Auto-generated method stub
		taskDao.deleteById(taskId);
		return "Task Deleted";
	}

	@Override
	public Task updateTask(Long taskId, Task taskDetails) {
		// TODO Auto-generated method stub
		Task existingTask = taskDao.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
		
		existingTask.setAssignTo(taskDetails.getAssignTo());
		existingTask.setStatus(taskDetails.getStatus());
		existingTask.setPriority(taskDetails.getPriority());
		existingTask.setDueDate(taskDetails.getDueDate());
		existingTask.setDescription(taskDetails.getDescription());


	    return taskDao.save(existingTask);
	}

	@Override
	public Task getTaskById(Long id) {
	    return taskDao.findById(id)
	            .orElseThrow(() -> new RuntimeException("Task not found with ID: " + id));
	}
	
}
