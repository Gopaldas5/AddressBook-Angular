import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from '../address-book.service';
import { AddressBookModel } from '../AddressBookModel';

// import { AddressBookModel } from '../AddressBookModel';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   contact:AddressBookModel= new AddressBookModel("", "", "","", [],0); 

  states: any = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",  "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu",  "Delhi", "Lakshadweep", "Puducherry"]
  cities: any = [ 'Kishanganj','Patna','Allahabad', 'Maharajganj', 'Mahasamund', 'Mahbubnagar', 'Mahe', 'Mahendragarh', 'Mahoba', 'Mainpuri', 'Malappuram', 'Maldah', 'Malkangiri', 'Mamit', 'Mandi', 'Mandla', 'Mandsaur', 'Mandya', 'Mansa', 'Marigaon', 'Mathura', 'Mau', 'Mayurbhanj', 'Medak', 'Meerut', 'Mehsana', 'Mewat', 'Mirzapur', 'Moga', 'Mokokchung', 'Mon', 'Moradabad', 'Morena', 'Mumbai City', 'Mumbai suburban', 'Munger', 'Murshidabad', 'Muzaffarnagar', 'Muzaffarpur', 'Mysore', 'Nabarangpur', 'Nadia', 'Nagaon', 'Nagapattinam', 'Nagaur', 'Nagpur', 'Nainital', 'Nalanda', 'Nalbari', 'Nalgonda', 'Namakkal', 'Nanded', 'Nandurbar', 'Narayanpur', 'Narmada', 'Narsinghpur', 'Nashik', 'Navsari', 'Nawada', 'Nawanshahr', 'Nayagarh', 'Neemuch', 'Nellore', 'New Delhi', 'Nilgiris', 'Nizamabad', 'North 24 Parganas', 'North Delhi', 'North East Delhi', 'North Goa', 'North Sikkim', 'North Tripura', 'North West Delhi', 'Nuapada', 'Ongole', 'Osmanabad', 'Pakur', 'Palakkad', 'Palamu', 'Pali', 'Palwal', 'Panchkula', 'Panchmahal', 'Panchsheel Nagar district (Hapur)', 'Panipat', 'Panna', 'Papum Pare', 'Parbhani', 'Paschim Medinipur', 'Patan', 'Pathanamthitta', 'Pathankot', 'Patiala', 'Patna', 'Pauri Garhwal', 'Perambalur', 'Phek', 'Pilibhit', 'Pithoragarh', 'Pondicherry', 'Poonch', 'Porbandar', 'Pratapgarh', 'Pratapgarh', 'Pudukkottai', 'Pulwama', 'Pune', 'Purba Medinipur', 'Puri', 'Purnia', 'Purulia', 'Raebareli', 'Raichur', 'Raigad', 'Raigarh', 'Raipur', 'Raisen', 'Rajauri', 'Rajgarh', 'Rajkot', 'Rajnandgaon', 'Rajsamand', 'Ramabai Nagar (Kanpur Dehat)', 'Ramanagara', 'Ramanathapuram', 'Ramban', 'Ramgarh', 'Rampur', 'Ranchi', 'Ratlam', 'Ratnagiri', 'Rayagada', 'Reasi', 'Rewa', 'Rewari', 'Ri Bhoi', 'Rohtak', 'Rohtas', 'Rudraprayag', 'Rupnagar', 'Sabarkantha', 'Sagar', 'Saharanpur', 'Saharsa', 'Sahibganj', 'Saiha', 'Salem', 'Samastipur', 'Samba', 'Sambalpur', 'Sangli', 'Sangrur', 'Sant Kabir Nagar', 'Sant Ravidas Nagar', 'Saran', 'Satara', 'Satna', 'Sawai Madhopur', 'Sehore', 'Senapati', 'Seoni', 'Seraikela Kharsawan', 'Serchhip', 'Shahdol', 'Shahjahanpur', 'Shajapur', 'Shamli', 'Sheikhpura', 'Sheohar', 'Sheopur', 'Shimla', 'Shimoga', 'Shivpuri', 'Shopian', 'Shravasti', 'Sibsagar', 'Siddharthnagar', 'Sidhi', 'Sikar', 'Simdega', 'Sindhudurg', 'Singrauli', 'Sirmaur', 'Sirohi', 'Sirsa', 'Sitamarhi', 'Sitapur', 'Sivaganga', 'Siwan', 'Solan', 'Solapur', 'Sonbhadra', 'Sonipat', 'Sonitpur', 'South 24 Parganas', 'South Delhi', 'South Garo Hills', 'South Goa', 'South Sikkim', 'South Tripura', 'South West Delhi', 'Sri Muktsar Sahib', 'Srikakulam', 'Srinagar', 'Subarnapur (Sonepur)', 'Sultanpur', 'Sundergarh', 'Supaul', 'Surat', 'Surendranagar', 'Surguja', 'Tamenglong', 'Tarn Taran', 'Tawang', 'Tehri Garhwal', 'Thane', 'Thanjavur', 'The Dangs', 'Theni', 'Thiruvananthapuram', 'Thoothukudi', 'Thoubal', 'Thrissur', 'Tikamgarh', 'Tinsukia', 'Tirap', 'Tiruchirappalli', 'Tirunelveli', 'Tirupur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Tonk', 'Tuensang', 'Tumkur', 'Udaipur', 'Udalguri', 'Udham Singh Nagar', 'Udhampur', 'Udupi', 'Ujjain', 'Ukhrul', 'Umaria', 'Una', 'Unnao', 'Upper Siang', 'Upper Subansiri' ];

   constructor(private router:Router, private service:ActivatedRoute, private addressBookService:AddressBookService) { }
// constructor(private router:Router){}
  ngOnInit(): void {
  }
  cancelForm(){
    this.router.navigate(['dashboard'])
  }

  addContact(){
    this.addressBookService.addContact(this.contact).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['dashboard'])
    })
  }

}
