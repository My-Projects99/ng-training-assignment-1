package com.exam.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.pojo.Task;
import com.exam.services.TaskService;


@RestController
@RequestMapping("/api/task")
@CrossOrigin("*")
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody Task task){
		
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(taskService.createTask(task));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task Already Assigned !!");
		}
		
	}
	
	@GetMapping
	public ResponseEntity<?> getAllTask(){
	    return ResponseEntity.status(HttpStatus.OK).body(taskService.getAllTask());
	}

	@GetMapping("/{taskId}")
	public ResponseEntity<?> getTaskById(@PathVariable("taskId") Long taskId) {
	    try {
	        Task task = taskService.getTaskById(taskId);
	        return ResponseEntity.ok(task);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found with ID: " + taskId);
	    }
	}

	
	@DeleteMapping("/{taskId}")
	public ResponseEntity<?> DeleteUser(@PathVariable("taskId") Long taskId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(taskService.taskDeleted(taskId));
	}
	
	//Update User By UserId
	
	@PutMapping("/{taskId}")
	public ResponseEntity<?> updateUser(@PathVariable("taskId") Long taskId, @RequestBody Task taskDetails) {
	    try {
	        Task updatedTask = taskService.updateTask(taskId, taskDetails);
	        return ResponseEntity.ok(updatedTask);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with ID: " + taskId);
	    }
	}
}
