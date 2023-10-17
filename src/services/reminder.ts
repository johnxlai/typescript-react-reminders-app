import axios from 'axios';
import Reminder from '../models/Reminder';

class ReminderService {
  http = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
  })

  async getReminders(){
    const response = await this.http.get<Reminder[]>('todos');
    return response.data;
  }

  async addReminder(title:string){
    const response = await this.http.post<Reminder>('/todos', {title})
    return response.data;
  }
}