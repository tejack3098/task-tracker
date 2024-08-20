import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import Task from '../models/task';
import '../styles/TaskTracker.css';

const TaskTracker: React.FC = () => { 
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <CssBaseline />
      <div className="task-tracker-container">
        <Header onOpenModal={handleOpen} />
        <Container className="task-tracker-content">
          <TaskModal open={modalOpen} handleClose={handleClose} onAdd={handleAddTask} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </Container>
      </div>
    </>
  );
};

export default TaskTracker;
