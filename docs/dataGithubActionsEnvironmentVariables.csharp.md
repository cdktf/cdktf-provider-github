# `data_github_actions_environment_variables`

Refer to the Terraform Registory for docs: [`data_github_actions_environment_variables`](https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables).

# `dataGithubActionsEnvironmentVariables` Submodule <a name="`dataGithubActionsEnvironmentVariables` Submodule" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsEnvironmentVariables <a name="DataGithubActionsEnvironmentVariables" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables github_actions_environment_variables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentVariables(Construct Scope, string Id, DataGithubActionsEnvironmentVariablesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig">DataGithubActionsEnvironmentVariablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig">DataGithubActionsEnvironmentVariablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentVariables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentVariables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentVariables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList">DataGithubActionsEnvironmentVariablesVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.variables"></a>

```csharp
public DataGithubActionsEnvironmentVariablesVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList">DataGithubActionsEnvironmentVariablesVariablesList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsEnvironmentVariablesConfig <a name="DataGithubActionsEnvironmentVariablesConfig" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentVariablesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string FullName = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.environment">Environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#environment DataGithubActionsEnvironmentVariables#environment}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#full_name DataGithubActionsEnvironmentVariables#full_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#id DataGithubActionsEnvironmentVariables#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#name DataGithubActionsEnvironmentVariables#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#environment DataGithubActionsEnvironmentVariables#environment}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#full_name DataGithubActionsEnvironmentVariables#full_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#id DataGithubActionsEnvironmentVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/actions_environment_variables#name DataGithubActionsEnvironmentVariables#name}.

---

### DataGithubActionsEnvironmentVariablesVariables <a name="DataGithubActionsEnvironmentVariablesVariables" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentVariablesVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubActionsEnvironmentVariablesVariablesList <a name="DataGithubActionsEnvironmentVariablesVariablesList" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentVariablesVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.get"></a>

```csharp
private DataGithubActionsEnvironmentVariablesVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubActionsEnvironmentVariablesVariablesOutputReference <a name="DataGithubActionsEnvironmentVariablesVariablesOutputReference" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentVariablesVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariables">DataGithubActionsEnvironmentVariablesVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGithubActionsEnvironmentVariablesVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentVariables.DataGithubActionsEnvironmentVariablesVariables">DataGithubActionsEnvironmentVariablesVariables</a>

---



