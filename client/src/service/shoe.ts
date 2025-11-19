import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { IShoe, IShoeFormValues } from "../types";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const shoeService = {
	getAll: () => api.get<IShoe[]>("/shoes"),
	getById: (id: string) => api.get<IShoe>(`/shoes/${id}`),
	create: (data: IShoeFormValues) => api.post<IShoe>("/shoes", data),
	update: (id: string, data: Partial<IShoeFormValues>) =>
	  api.put(`/shoes/${id}`, data),
	delete: (id: string) => api.delete(`/shoes/${id}`),
  };

const useShoes =() => 
	useQuery({
		queryKey:["shoes"],
		queryFn:() => shoeService.getAll(),
		select:(data) => data.data,
});

const useShoe =(id:string) => 
	useQuery({
		queryKey:["shoes", id],
		queryFn:() => shoeService.getById(id),
		select:(data) => data.data,
});

const useCreateShoe = () => {
	const client = useQueryClient();
	const navigate = useNavigate();
  
	return useMutation({
	  mutationKey: ["update"],
	  mutationFn: (data: IShoeFormValues) => shoeService.create(data),
	  onSuccess: () => {
		client.invalidateQueries({ queryKey: ["shoes"] });
		navigate("/dashboard");
		toast.success("Item created successfully");
	  },
	  onError: (error: Error) => {
		console.log(error);
		toast.error("An error occured");
	  },
	});
  };
  
  const useUpdateShoe = () => {
	const client = useQueryClient();
	const navigate = useNavigate();
  
	return useMutation({
	  mutationKey: ["update"],
	  mutationFn: ({
		id,
		data,
	  }: {
		id: string;
		data: Partial<IShoeFormValues>;
	  }) => shoeService.update(id, data),
	  onSuccess: () => {
		client.invalidateQueries({ queryKey: ["shoes"] });
		navigate("/dashboard");
		toast.success("Item created successfully");
	  },
	  onError: (error: Error) => {
		console.log(error);
		toast.error("An error occured");
	  },
	});
  };

  const useDeleteShoe = () => {
	const client = useQueryClient();
  
	return useMutation({
	  mutationKey: ["delete"],
	  mutationFn: (id: string) => shoeService.delete(id),
	  onSuccess: () => {
		client.invalidateQueries({ queryKey: ["shoes"] });
		toast.success("Item deleted successfully");
	  },
	  onError: (error: Error) => {
		console.log(error);
		toast.error("An error occured");
	  },
	});
  };
  
  
	
export {shoeService, useShoes,useShoe,useCreateShoe,useUpdateShoe,useDeleteShoe};

