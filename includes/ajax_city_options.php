<?php
if(isset($_POST["country"])){
    // Capture selected country
    $country = $_POST["country"];


    $bangladesh_cities = array('Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymenshingh');
    $india_cities = array('Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Uttar Pradesh', 'Jammu and Kashmir', 'Gujarat', 'Kaarnataka', 'Andhra Pradesh', 'Odisha', 'Chhattisgarh', 'Tamil Nadu', 'Telangana', 'The Bihar', 'West Bengal', 'Arunachal Pradesh', 'Jharkhand', 'That\'s Uneben', 'Himachal', 'Uttarakhand', 'Punjab', 'Haryana', 'Kerala', 'Meghalaya', 'Manipur', 'Mizoram', 'Nagaland', 'Tripura', 'Sikkim', 'Goa', 'Andaman', 'Nicobar Islands', 'Delhi', 'Puducherry', 'Dadra', 'Nagar Habeli', 'Chandigarh', 'Damon', 'Diu Lakshdeep');
     
    // Define country and city array
    $countryArr = array(
        "bangladesh" => $bangladesh_cities,
        "india" => $india_cities
    );
     
    // Display city dropdown based on country name
    if($country !== 'Select'){
        foreach($countryArr[$country] as $value){
            echo "<option>". $value . "</option>";
        }
    } 
}
die();
?>