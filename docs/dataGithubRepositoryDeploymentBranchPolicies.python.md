# `dataGithubRepositoryDeploymentBranchPolicies` Submodule <a name="`dataGithubRepositoryDeploymentBranchPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment_name: str,
  repository: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.environmentName">environment_name</a></code> | <code>str</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.environmentName"></a>

- *Type:* str

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.repository"></a>

- *Type:* str

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubRepositoryDeploymentBranchPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubRepositoryDeploymentBranchPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryDeploymentBranchPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies">deployment_branch_policies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput">environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName">environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deployment_branch_policies`<sup>Required</sup> <a name="deployment_branch_policies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies"></a>

```python
deployment_branch_policies: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a>

---

##### `environment_name_input`<sup>Optional</sup> <a name="environment_name_input" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput"></a>

```python
environment_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeploymentBranchPoliciesConfig <a name="DataGithubRepositoryDeploymentBranchPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment_name: str,
  repository: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName">environment_name</a></code> | <code>str</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository">repository</a></code> | <code>str</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_deployment_branch_policies

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a>

---



