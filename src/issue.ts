// https://www.terraform.io/docs/providers/github/r/issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Logins for Users to assign to this issue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#assignees Issue#assignees}
  */
  readonly assignees?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#body Issue#body}
  */
  readonly body?: string;
  /**
  * List of names of labels on the issue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#labels Issue#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#milestone_number Issue#milestone_number}
  */
  readonly milestoneNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#repository Issue#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/issue#title Issue#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/issue github_issue}
*/
export class Issue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_issue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/issue github_issue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueConfig
  */
  public constructor(scope: Construct, id: string, config: IssueConfig) {
    super(scope, id, {
      terraformResourceType: 'github_issue',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.24.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignees = config.assignees;
    this._body = config.body;
    this._labels = config.labels;
    this._milestoneNumber = config.milestoneNumber;
    this._repository = config.repository;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignees - computed: false, optional: true, required: false
  private _assignees?: string[]; 
  public get assignees() {
    return cdktf.Fn.tolist(this.getListAttribute('assignees'));
  }
  public set assignees(value: string[]) {
    this._assignees = value;
  }
  public resetAssignees() {
    this._assignees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneesInput() {
    return this._assignees;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getNumberAttribute('issue_id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // milestone_number - computed: false, optional: true, required: false
  private _milestoneNumber?: number; 
  public get milestoneNumber() {
    return this.getNumberAttribute('milestone_number');
  }
  public set milestoneNumber(value: number) {
    this._milestoneNumber = value;
  }
  public resetMilestoneNumber() {
    this._milestoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milestoneNumberInput() {
    return this._milestoneNumber;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignees: cdktf.listMapper(cdktf.stringToTerraform)(this._assignees),
      body: cdktf.stringToTerraform(this._body),
      labels: cdktf.listMapper(cdktf.stringToTerraform)(this._labels),
      milestone_number: cdktf.numberToTerraform(this._milestoneNumber),
      repository: cdktf.stringToTerraform(this._repository),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
