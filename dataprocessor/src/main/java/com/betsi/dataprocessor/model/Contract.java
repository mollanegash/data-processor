package com.betsi.dataprocessor.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "anticipated_acquisition_strategy")
    private String anticipatedAcquisitionStrategy;

    @Column(name = "primary_naics")
    private String primaryNaics;

    @Column(name = "total_contract_range")
    private String totalContractRange;

    @Column(name = "target_solicitation_month_year")
    private String targetSolicitationMonthYear;

    @Column(name = "target_award_month_year")
    private String targetAwardMonthYear;

    @Column(name = "operating_division")
    private String operatingDivision;

    @Column(name = "program_office_poc_first_name")
    private String programOfficePocFirstName;

    @Column(name = "program_office_poc_last_name")
    private String programOfficePocLastName;

    @Column(name = "program_office_poc_email")
    private String programOfficePocEmail;

    @Column(name = "program_poc_office")
    private String programPocOffice;

    @Column(name = "contracting_office")
    private String contractingOffice;

    @Column(name = "co_first_name")
    private String coFirstName;

    @Column(name = "co_last_name")
    private String coLastName;

    @Column(name = "co_email")
    private String coEmail;

    @Column(name = "incumbent_contractor")
    private String incumbentContractor;

    @Column(name = "existing_contract_number")
    private String existingContractNumber;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAnticipatedAcquisitionStrategy() {
        return anticipatedAcquisitionStrategy;
    }

    public void setAnticipatedAcquisitionStrategy(String anticipatedAcquisitionStrategy) {
        this.anticipatedAcquisitionStrategy = anticipatedAcquisitionStrategy;
    }

    public String getPrimaryNaics() {
        return primaryNaics;
    }

    public void setPrimaryNaics(String primaryNaics) {
        this.primaryNaics = primaryNaics;
    }

    public String getTotalContractRange() {
        return totalContractRange;
    }

    public void setTotalContractRange(String totalContractRange) {
        this.totalContractRange = totalContractRange;
    }

    public String getTargetSolicitationMonthYear() {
        return targetSolicitationMonthYear;
    }

    public void setTargetSolicitationMonthYear(String targetSolicitationMonthYear) {
        this.targetSolicitationMonthYear = targetSolicitationMonthYear;
    }

    public String getTargetAwardMonthYear() {
        return targetAwardMonthYear;
    }

    public void setTargetAwardMonthYear(String targetAwardMonthYear) {
        this.targetAwardMonthYear = targetAwardMonthYear;
    }

    public String getOperatingDivision() {
        return operatingDivision;
    }

    public void setOperatingDivision(String operatingDivision) {
        this.operatingDivision = operatingDivision;
    }

    public String getProgramOfficePocFirstName() {
        return programOfficePocFirstName;
    }

    public void setProgramOfficePocFirstName(String programOfficePocFirstName) {
        this.programOfficePocFirstName = programOfficePocFirstName;
    }

    public String getProgramOfficePocLastName() {
        return programOfficePocLastName;
    }

    public void setProgramOfficePocLastName(String programOfficePocLastName) {
        this.programOfficePocLastName = programOfficePocLastName;
    }

    public String getProgramOfficePocEmail() {
        return programOfficePocEmail;
    }

    public void setProgramOfficePocEmail(String programOfficePocEmail) {
        this.programOfficePocEmail = programOfficePocEmail;
    }

    public String getProgramPocOffice() {
        return programPocOffice;
    }

    public void setProgramPocOffice(String programPocOffice) {
        this.programPocOffice = programPocOffice;
    }

    public String getContractingOffice() {
        return contractingOffice;
    }

    public void setContractingOffice(String contractingOffice) {
        this.contractingOffice = contractingOffice;
    }

    public String getCoFirstName() {
        return coFirstName;
    }

    public void setCoFirstName(String coFirstName) {
        this.coFirstName = coFirstName;
    }

    public String getCoLastName() {
        return coLastName;
    }

    public void setCoLastName(String coLastName) {
        this.coLastName = coLastName;
    }

    public String getCoEmail() {
        return coEmail;
    }

    public void setCoEmail(String coEmail) {
        this.coEmail = coEmail;
    }

    public String getIncumbentContractor() {
        return incumbentContractor;
    }

    public void setIncumbentContractor(String incumbentContractor) {
        this.incumbentContractor = incumbentContractor;
    }

    public String getExistingContractNumber() {
        return existingContractNumber;
    }

    public void setExistingContractNumber(String existingContractNumber) {
        this.existingContractNumber = existingContractNumber;
    }
}

