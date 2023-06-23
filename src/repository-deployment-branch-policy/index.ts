// https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryDeploymentBranchPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The target environment name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the branch
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}
  */
  readonly name: string;
  /**
  * The GitHub repository name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}
*/
export class RepositoryDeploymentBranchPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_deployment_branch_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryDeploymentBranchPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryDeploymentBranchPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_deployment_branch_policy',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.28.1',
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
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
