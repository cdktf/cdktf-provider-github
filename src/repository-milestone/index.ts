// https://www.terraform.io/docs/providers/github/r/repository_milestone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryMilestoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#description RepositoryMilestone#description}
  */
  readonly description?: string;
  /**
  * in yyyy-mm-dd format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#due_date RepositoryMilestone#due_date}
  */
  readonly dueDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#id RepositoryMilestone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#owner RepositoryMilestone#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#repository RepositoryMilestone#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#state RepositoryMilestone#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#title RepositoryMilestone#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_milestone github_repository_milestone}
*/
export class RepositoryMilestone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_milestone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_milestone github_repository_milestone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryMilestoneConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryMilestoneConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_milestone',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dueDate = config.dueDate;
    this._id = config.id;
    this._owner = config.owner;
    this._repository = config.repository;
    this._state = config.state;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // due_date - computed: false, optional: true, required: false
  private _dueDate?: string; 
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public resetDueDate() {
    this._dueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDateInput() {
    return this._dueDate;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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
      description: cdktf.stringToTerraform(this._description),
      due_date: cdktf.stringToTerraform(this._dueDate),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
