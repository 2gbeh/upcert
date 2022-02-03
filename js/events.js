// JavaScript Document
function validateCVN (e, cvn)
{
	var key = e.which || e.keyCode;
	if (key == 13) 
	{
		if (cvn == "0218-0008")
			location.assign("portal.html");
		else
			location.assign("error.html");
	}
	else 
		return false;
}
function searchCVN ()
{
	var cvn = document.getElementById('cvn').value;
	if (cvn == "0218-0008")
		location.assign("portal.html");
	else
		location.assign("error.html");
}
function showList ()
{
	location.assign("list.html");	
}
function setList (page)
{
	var arr = getList(page), map = {}, image = '', title = '', subtit = '', buf = '', sn = 1;
	var sn = page == 1? 1: 28;
	for (var i in arr)
	{
		map = arr[i];
		image = 'logo/'+map.i;
		title = map.t;
		subtit = map.s;
		
		buf += '<li>';
			buf += '<table border="0">';
			buf += '<tr>';
				buf += '<td><div class="thumb" style=background-image:url("'+image+'");>&nbsp;</div></td>';
				buf += '<td>';
					buf += '<div class="title">'+sn+'. '+title+'</div>';
					buf += '<div class="subtitle">'+subtit+'</div>';				
				buf += '</td>';					
				buf += '<td>&nbsp;</td>';								
			buf += '</tr>';
			buf += '</table>';
		buf += '</li>';
		sn++;
	}
	document.getElementById('embedList').innerHTML = '<ul class="courses">'+buf+'</ul>';
}
function getList (page)
{
	if (page == 1)
	return [
	 {i:'adobe_ps.png', t:'Certified Adobe Graphics Design Expert', s:'2020-08-23 13:15:00'},
	 {i:'adobe_pr.png', t:'Certified Adobe Multi-Media Expert', s:'2020-08-25 22:12:00'},
	 {i:'adobe_dw.png', t:'Certified Adobe Web Design Expert', s:null},
	 {i:'android.png', t:'Certified Android App Developer', s:null},
	 {i:'firebase.png', t:'Certified Android-Flutter App Developer', s:null},
	 {i:'cpp.png', t:'Certified C/C++ Software Developer', s:null},
	 {i:'angular.png', t:'Certified Full Stack Web Developer', s:null},
	 {i:'j2ee.png', t:'Certified Java 2 Web Developer <a>J2EE</a>', s:null},
	 {i:'java.png', t:'Certified Java Software Engineer', s:null},
	 {i:'junit.png', t:'Certified Java Software Tester <a>JUint</a>', s:null},
	 {i:'js.png', t:'Certified JavaScript Developer <a>ES6</a>', s:null},
	 {i:'npm.png', t:'Certified Mean Stack Web Developer', s:null},
	 {i:'ms_net.png', t:'Certified Microsoft .NET Developer', s:'2020-08-25 23:39:00'},
	 {i:'ms_cs.png', t:'Certified Microsoft C# Software Developer', s:'2020-08-25 23:39:00'},
	 {i:'ms_azure.png', t:'Certified Microsoft Cloud App Developer <a>Azure</a>', s:'2020-08-25 23:39:00'},
	 {i:'ms_excel.png', t:'Certified Microsoft Excel Professional', s:'2020-08-25 23:39:00'},
	 {i:'ms_word.png', t:'Certified Microsoft Office Professional <a>LIII</a>', s:null},
	 {i:'ms_access.png', t:'Certified Microsoft Office Professional <a>LVI</a>', s:null},
	 {i:'ms_sql.png', t:'Certified Microsoft SQL Server Administrator', s:'2020-08-25 23:39:00'},
	 {i:'xampp.png', t:'Certified MySQL Database Administrator', s:null},
	 {i:'php.png', t:'Certified PHP Application Developer', s:null},
	 {i:'laravel.png', t:'Certified PHP-Laravel Web Developer', s:null},
	 {i:'python.png', t:'Certified Python Data Analyst <a>Pandas</a>', s:null},
	 {i:'django.png', t:'Certified Pyhton-Django Web Developer', s:null},
	 {i:'tkinter.png', t:'Certified Python Software Engineer <a>TkInter</a>', s:null},
	 {i:'html5.png', t:'Certified Web Application Designer', s:'2020-07-16 19:14:00'},
	 {i:'php7.png', t:'Certified Web Application Developer', s:null},
	];
	else
	return [
	 {i:'amazon_aws.png', t:'Certified Amazon Cloud App Developer', s:'2020-08-23 13:15:00'},
	 {i:'apple_ios.png', t:'Certified Apple iOS Developer', s:null},
	 {i:'apple_swift.png', t:'Certified Apple Swift Developer', s:null},
	 {i:'css3.png', t:'Certified Application UI/UX Specialist', s:null},
	 {i:'php7.png', t:'Certified Back-end Web Developer <a>PHP 7</a>', s:null},
	 {i:'comptia_a.png', t:'Certified Computer Hardware Technician', s:null},
	 {i:'comptia_n.png', t:'Certified Computer Network Administrator', s:null},
	 {i:'ms_xp.png', t:'Certified Computer Systems Operator', s:null},
	 {i:'corel.png', t:'Certified CorelDRAW Graphics Designer', s:'2020-08-23 13:15:00'},
	 {i:'comodo.png', t:'Certified Cybersecurity Analyst <a>CSA+</a>', s:null},
	 {i:'redhat.png', t:'Certified Cybersecurity Expert <a>Red Hat</a>', s:null},
	 {i:'ieee.png', t:'Certified Electrical/Electronics Engineer', s:null},
	 {i:'bootstrap.png', t:'Certified Front-end Web Developer <a>Bootstrap 4</a>', s:'2020-07-16 19:14:00'},
	 {i:'git.png', t:'Certified Git/GitHub Specialist', s:null},
	 {i:'google_cloud.png', t:'Certified Google Cloud App Developer', s:'2020-08-23 13:15:00'},
	 {i:'google_adwords.png', t:'Certified Google Digital Marketer <a>AdWords</a>', s:null},
	 {i:'hse.png', t:'Certified HSE Safety Officer <a>HSE 3</a>', s:'2020-08-25 23:39:00'},
	 {i:'kotlin.png', t:'Certified JetBrains Kotlin App Developer', s:null},
	 {i:'mba.png', t:'Certified Micro-Business Administrator', s:null},
	 {i:'ms_win10.png', t:'Certified Microsoft Computer Instructor', s:null},
	 {i:'ms_ie.png', t:'Certified Microsoft Internet Webmaster <a>CIW</a>', s:null},
	 {i:'ms_publisher.png', t:'Certified Microsoft Web Instructor', s:null},
	 {i:'upwork.png', t:'Certified Personnel Management/HR Specialist', s:null},
	 {i:'pmp.png', t:'Certified Project Management Associate <a>PMA</a>', s:'2020-08-25 23:39:00'},
	 {i:'sage.png', t:'Certified Sage Software Professional', s:'2020-08-25 23:39:00'},
	 {i:'spss.png', t:'Certified SPSS Software Professional', s:'2020-08-25 23:39:00'},
	 {i:'wordpress.png', t:'Certified WordPress Web Developer', s:null},
	];	
}
