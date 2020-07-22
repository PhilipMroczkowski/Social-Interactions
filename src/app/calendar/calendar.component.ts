import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('year', { static: true }) selectYear: ElementRef;
  @ViewChild('month', { static: true }) selectMonth: ElementRef;
  @ViewChild('calendar', { static: true }) calendar: ElementRef;
  @ViewChild('theadMonth', { static: true }) thead_month: ElementRef;
  @ViewChild('monthAndYear', {static: true}) monthAndYear: ElementRef;
  @ViewChild('calendarBody', {static: true}) calendarBody: ElementRef;
  language: any;
  today: Date;
  currentMonth: any;
  currentYear: any;
  createYear: string;
  months: any;
  days: any;
  dayHeader: string;

  constructor() {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.createYear = this.generate_year_range(1970, 2050);
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //Populate "dayHeader" with HTML content
    this.dayHeader = "<tr>";
    for (let index in this.days) {
      this.dayHeader += "<th data-days='" + this.days[index] + "'>" + this.days[index] + "</th>";
    }
    this.dayHeader += "</tr>";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.selectYear.nativeElement.insertAdjacentHTML('afterbegin', this.createYear);
    this.thead_month.nativeElement.insertAdjacentHTML('afterbegin', this.dayHeader);
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
  }

  next() {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    this.showCalendar(this.currentMonth, this.currentYear);
  }
  
  jump() {
    this.currentYear = parseInt(this.selectYear.nativeElement.value);
    this.currentMonth = parseInt(this.selectMonth.nativeElement.value);
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();
  
    this.calendarBody.nativeElement.innerHTML = "";
  
    
    this.monthAndYear.nativeElement.innerHTML = this.months[month] + " " + year;
    this.selectYear.nativeElement.value = year;
    this.selectMonth.nativeElement.value = month;
  
    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        var row = document.createElement("tr");
        var cell;
        var cellText;
  
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > this.daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", this.months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";
  
                if ( date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
                console.log(row);
            }
  
  
        }
  
      this.calendarBody.nativeElement.appendChild(row);
    }
  
  }

  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

}

