import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewStudent = () => {
    const [data,changeData] = useState(
        [
            {"name":"Ananya Joseph" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"MCA 1st Year", "admin":"ADM1001"},
            {"name":"Rahul Krishna" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2x-sBaxBdJzLkHrhzg930RBZuk56hPpSmo7_1B-bpKOLkaD4-0WlFRo&s=10", "course":"MCA 2nd Year", "admin":"ADM1002"},
            {"name":"Maria Thomas" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"B.Com 3rd Year", "admin":"ADM1003"},
            {"name":"Athul antu" , "avatar":"https://media.istockphoto.com/id/1387542673/vector/cartoon-people-avatar.jpg?s=612x612&w=is&k=20&c=3lRR4aPneFkqkF3dNzZUwq6UjTXy9P8WHHNWDhgenXs=", "course":"B.Tech IT", "admin":"ADM1004"},
            {"name":"Merin Thomas" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"B.Sc Computer Science", "admin":"ADM1005"},
            {"name":"Alan Sebastin" , "avatar":"https://media.istockphoto.com/id/1387542673/vector/cartoon-people-avatar.jpg?s=612x612&w=is&k=20&c=3lRR4aPneFkqkF3dNzZUwq6UjTXy9P8WHHNWDhgenXs=", "course":"MBA 1st Year", "admin":"ADM1006"},
            {"name":"Anet paul" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"B.Tech IT", "admin":"ADM1007"},
            {"name":"Albin Mathew" , "avatar":"https://media.istockphoto.com/id/1387542673/vector/cartoon-people-avatar.jpg?s=612x612&w=is&k=20&c=3lRR4aPneFkqkF3dNzZUwq6UjTXy9P8WHHNWDhgenXs=", "course":"B.Com 3rd Year", "admin":"ADM1008"},
            {"name":"Anu Maria" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"B.Sc Computer Science", "admin":"ADM1009"},
            {"name":"Jostin Thomas" , "avatar":"https://media.istockphoto.com/id/1387542673/vector/cartoon-people-avatar.jpg?s=612x612&w=is&k=20&c=3lRR4aPneFkqkF3dNzZUwq6UjTXy9P8WHHNWDhgenXs=", "course":"B.Tech IT", "admin":"ADM10010"},
            {"name":"Elsa Mathew" , "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSKZUzfqMwldWIHTEc3zxgfJjk4wVLnGOH6v1AvzVRXhRP4FgXtnQxcs&s=10", "course":"MBA 1st Year", "admin":"ADM10011"},
            {"name":"Ajith Thomas" , "avatar":"https://media.istockphoto.com/id/1387542673/vector/cartoon-people-avatar.jpg?s=612x612&w=is&k=20&c=3lRR4aPneFkqkF3dNzZUwq6UjTXy9P8WHHNWDhgenXs=", "course":"B.Com 3rd Year", "admin":"ADM10012"},
            
        ]
    )
    return (
        <div>
            <NavigationBar/>
            <div className="containter">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl 12 col-xxl-12">
                        <div className="card shadow">
                            <div class="card-header bg-primary text-white text-center">
                                <h3>View All Students</h3>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div class="row row-cols-1 row-cols-md-6 g-6">

                                        {data.map(
                                            (value,index) => {
                                                return(
                                                    <div class="col">
                                            <div class="card">
                                                <img src={value.avatar} class="card-img-top" alt="Student" height="200" />

                                                <div class="card-body">
                                                    <h5 class="card-title">Name : {value.name}</h5>

                                                    <p class="card-text"><strong>Admission Number :</strong> {value.admin}</p>

                                                    <p class="card-text"><strong>Course :</strong> {value.course} </p>

                                                    <div class="d-flex justify-content-between">
                                                        <button class="btn btn-success">Select</button>
                                                        <button class="btn btn-primary">View Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                )
                                            }
                                        )}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent