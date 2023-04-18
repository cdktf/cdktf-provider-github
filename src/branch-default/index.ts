// https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch (e.g. 'main').
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default#branch BranchDefault#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default#id BranchDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicate if it should rename the branch rather than use an existing branch. Defaults to 'false'.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default#rename BranchDefault#rename}
  */
  readonly rename?: boolean | cdktf.IResolvable;
  /**
  * The GitHub repository.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default#repository BranchDefault#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default github_branch_default}
*/
export class BranchDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_branch_default";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/branch_default github_branch_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: BranchDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_default',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.23.0',
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
    this._branch = config.branch;
    this._id = config.id;
    this._rename = config.rename;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
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

  // rename - computed: false, optional: true, required: false
  private _rename?: boolean | cdktf.IResolvable; 
  public get rename() {
    return this.getBooleanAttribute('rename');
  }
  public set rename(value: boolean | cdktf.IResolvable) {
    this._rename = value;
  }
  public resetRename() {
    this._rename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameInput() {
    return this._rename;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      id: cdktf.stringToTerraform(this._id),
      rename: cdktf.booleanToTerraform(this._rename),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
