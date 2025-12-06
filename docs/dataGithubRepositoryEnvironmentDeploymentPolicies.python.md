# `dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule <a name="`dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryEnvironmentDeploymentPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.environment"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.repository"></a>

- *Type:* str

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies"></a>

```python
policies: DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesConfig <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository">repository</a></code> | <code>str</code> | The name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_environment_deployment_policies

dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a>

---



