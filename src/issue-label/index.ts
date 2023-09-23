// https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * A 6 character hex code, without the leading '#', identifying the color of the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label#color IssueLabel#color}
  */
  readonly color: string;
  /**
  * A short description of the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label#description IssueLabel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label#id IssueLabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label#name IssueLabel#name}
  */
  readonly name: string;
  /**
  * The GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label#repository IssueLabel#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label github_issue_label}
*/
export class IssueLabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_issue_label";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/issue_label github_issue_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueLabelConfig
  */
  public constructor(scope: Construct, id: string, config: IssueLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'github_issue_label',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.38.0',
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
    this._color = config.color;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
